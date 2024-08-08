import { NoteCreateForm, NoteUICollection, NoteUpdateForm } from './ui-components';
import { NavBar } from './ui-components';
import { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  const handleCreateSubmit = () => {
    setShowCreateModal(false);
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setShowUpdateModal(false);
  };

  return (
    <>
      <NavBar
        width="100%"
        marginBottom="20px"
        overrides={{
          "Rectangle 2": { onClick: () => setShowCreateModal(true) }
        }}
      />
      <div className="container">
        <NoteUICollection />
      </div>
      {showCreateModal && (
        <div className="modal">
          <NoteCreateForm
            overrides={{
              "NoteCreateForm": {
                // Set the modal to close when the form is successfully submitted
                onSuccess: handleCreateSubmit
              },
              "CancelButton": {
                // Handle the cancel button click
                as: 'button',
                onClick: handleCancel
              }
            }}
          />
        </div>
      )}
      {showUpdateModal && updateNote && (
        <div className="modal">
          <NoteUpdateForm
            note={updateNote}
            overrides={{
              "NoteUpdateForm": {
                
                onSuccess: () => setShowUpdateModal(false)
              },
              "CancelButton": {
                // Handle the cancel button click
                as: 'button',
                onClick: handleCancel
              }
            }}
          />
        </div>
      )}
    </>
  );
}

export default withAuthenticator(App);
