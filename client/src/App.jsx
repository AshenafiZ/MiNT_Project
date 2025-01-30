import React, { useState }  from 'react';
import AppRoutes from './routes/routes';
import { Button } from './components/ui/button';
import { Notify } from './components/ui/notify';
import { Modal } from './components/ui/modal';
function App() {
  const [notification, setNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showNotification = (message, type) => {
    setNotification({ message, type });

    // Remove notification after a few seconds
    setTimeout(() => setNotification(null), 3000);
  };
  return(
    
    <>
      {/* <AppRoutes /> */}
      <div className="flex  items-center justify-center bg-gray-100">
        <Button status="approve">Approve</Button>
        <Button status="delete">Delete</Button>
        <Button status="cancel">Cancel</Button>
        <Button status="info">Info</Button>
        <Button status="outline">Outline</Button>

        <div className="mt-4">
          <Button status="approve" size="sm">Small</Button>
          <Button status="approve" size="md" className="ml-2">Medium</Button>
          <Button status="approve" size="lg" className="ml-2">Large</Button>
        </div>
      </div> 
      <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <Button onClick={() => showNotification("Approved successfully!", "success")}>
        Approve
      </Button>
      <Button onClick={() => showNotification("Error occurred!", "error")}>
        Error
      </Button>
      <Button onClick={() => showNotification("This is a warning!", "warning")}>
        Warning
      </Button>
      <Button onClick={() => showNotification("Informational message", "info")}>
        Info
      </Button>

      {notification && (
        <Notify
          message={notification.message}
          type={notification.type}
          duration={3000}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
        <p>This is a simple modal component.</p>
      </Modal>
    </div>
    </>   
  );
} 
export default App;
