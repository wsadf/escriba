import api from '@/api'

export default {
  getAllContacts: () => api.get('pessoas'),
  newContact: (payload) => api.post('pessoas', payload),
  deleteContact: (id) => api.delete(`pessoas/${id}`),
  editContact: (id, payload) => api.put(`pessoas/${id}`, payload),
}
