import { NoteCreateForm, NoteUICollection, NoteUpdateForm } from './ui-components'
import { NavBar } from './ui-components'
import { useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App () {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()
  return (
    <>
    <NavBar width="100%"  marginBottom='20px' 
  overrides={{
    "Rectangle 2": { onClick: () => setShowCreateModal(true) }
  }}
/>
    <div className='container' >
    <NoteUICollection />
    </div>
    <div className='modal' style={{ display: showCreateModal === false && 'none' }}>
  <NoteCreateForm overrides={{
    "NoteCreateForm": {
      as: 'button',
      onClick: () => setShowCreateModal(false)
    }
  }}
  />
</div>
    <div className='modal ' style={{display: 'none'}}>
    <NoteUpdateForm />
    </div>
    </>
  );
}

export default withAuthenticator(App);
