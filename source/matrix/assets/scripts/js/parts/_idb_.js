class KVIdb
{
  constructor ( db_s='kv_db', store_s='kv_store', version_n=1 )
  {
    this.idb_o     = null
    this.ready_o   = null
    this.idb_s     = db_s
    this.store_s   = store_s
    this.version_n = version_n

    this.init__v()
  }

  init__v ()
  {
    this.ready_o = new Promise( ( resolve, reject ) =>
    {
      const open_o = window.indexedDB.open( this.idb_s, this.version_n )

      open_o.onupgradeneeded = request_o => 
      {
        this.idb_o = request_o.target.result
        this.idb_o.createObjectStore( this.store_s )
      }

      open_o.onsuccess = request_o =>
      {
        this.idb_o = request_o.target.result
        resolve( request_o.target.result )    //: only to complete: in transactions, we use this.idb_o not result
      }

      open_o.onerror = request_o =>  reject( request_o.target.error )
    })
  }

  store__o ( mode_s='readonly' )
  {
    return this.idb_o
      .transaction( [ this.store_s ], mode_s )
      .objectStore( this.store_s )
  }

  set__v ( key_s, value_ )
  {
    return this.ready_o
      .then( () =>
      {
        return new Promise( ( resolve, reject ) =>
        {
          const set_o = this.store__o( 'readwrite' ).put( value_, key_s )

          set_o.onsuccess = resolve    //: nothing to do

          set_o.onerror = reject
        })
      })
  }

  update__v ( key_s, property, value_ )
  {
    return this.ready_o
      .then( () =>
      {
        return new Promise( ( resolve, reject ) =>
        {
          const store_o = this.store__o( 'readwrite' )
          const get_o = store_o.get( key_s )

          get_o.onsuccess = () =>
          {
            const item_o = get_o.result
            item_o[property] = value_
            const put_o = store_o.put( item_o, key_s )

            put_o.onsuccess = resolve
            
            put_o.onerror = reject
          }
          get_o.onerror = reject
        })
      })
  }

  walk__v ( callback_f )
  {
    return this.ready_o
      .then( () => 
      {
        return new Promise( ( resolve, reject ) =>
        {
          const walk_o = this.store__o().openCursor()
          walk_o.onsuccess = request_o =>
          {
            let cursor_o = request_o.target.result
            if ( cursor_o )
            {
              callback_f( cursor_o.key, cursor_o.value )
              cursor_o.continue()
            }
            else resolve()
          }
  
          walk_o.onerror = reject
        })
      })
  }

  get__ ( key_s )    //: anytyped value_
  {
    return this.ready_o
      .then( () => 
      {
        return new Promise( ( resolve, reject ) =>
        {
          const get_o = this.store__o().get( key_s )

          get_o.onsuccess = request_o => resolve( request_o.target.result )

          get_o.onerror = reject
        })
      })
  }

  key__b ( key_s )    //: return 1 for true : 0 for false
  {
    return this.ready_o
      .then( () => 
      {
        return new Promise( ( resolve, reject ) =>
        {
          const key_o = this.store__o().count( key_s )

          key_o.onsuccess = request_o => resolve( request_o.target.result )

          key_o.onerror = reject
        })
      })
  }

  last__ ()
  {
    return this.ready_o
      .then( () => 
      {
        return new Promise( ( resolve, reject ) =>
        {
          const last_o = this.store__o( 'readwrite' ).openCursor( null, 'prev' )

          last_o.onsuccess = request_o =>
          {
            if ( request_o.target.result ) resolve( request_o.target.result.value )
          }

          last_o.onerror = reject
        })
      })
  }

  deleteAll__v ( callback_f )
  {
    return this.ready_o
      .then( () => 
      {
        return new Promise( ( resolve, reject ) =>
        {
          const store_o = this.store__o( 'readwrite' )
          const delete_o = store.openCursor()

          delete_o.onsuccess = request_o =>
          {
            let cursor_o = request_o.target.result
            let item_o
            if ( cursor_o )
            {
              item_o = cursor_o.value
              if ( callback_f( item_o ) ) store_o.delete( cursor_o.key )
              cursor_o.continue()
            }
            else resolve
          }
  
          delete_o.onerror = reject
        })
      })
  }

  delete__v ( key_s )
  {
    return this.ready_o
      .then( () =>
      {
        return new Promise( ( resolve, reject ) =>
        {
          const delete_o = this.store__o( 'readwrite' ).delete( key_s )

          delete_o.onsuccess = resolve    //: nothing to do

          delete_o.onerror = reject
        })
      })
  }

  clear__v ()
  {
    return this.ready_o
      .then( () =>
      {
        return new Promise( ( resolve, reject ) =>
        {
          const clear_o = this.store__o( 'readwrite' ).clear()

          clear_o.onsuccess = resolve    //: nothing to do

          clear_o.onerror = reject
        })
      })
  }

  deleteIDB__v ()
  {
    window.indexedDB.deleteDatabase( this.idb_s )
  }
}