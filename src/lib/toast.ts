import { toast as hotToast } from 'react-hot-toast';

export const toast = {
  success: (message: string) => {
    hotToast.success(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#10B981',
        color: '#fff',
        borderRadius: '12px',
        padding: '16px',
        fontSize: '14px',
        fontWeight: '500',
      },
    });
  },
  
  error: (message: string) => {
    hotToast.error(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#EF4444',
        color: '#fff',
        borderRadius: '12px',
        padding: '16px',
        fontSize: '14px',
        fontWeight: '500',
      },
    });
  },
  
  loading: (message: string) => {
    return hotToast.loading(message, {
      position: 'top-right',
      style: {
        background: '#6366F1',
        color: '#fff',
        borderRadius: '12px',
        padding: '16px',
        fontSize: '14px',
        fontWeight: '500',
      },
    });
  },
  
  dismiss: (toastId: string) => {
    hotToast.dismiss(toastId);
  },
};