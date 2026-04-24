import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '0sff6kzm', 
  dataset: 'production',
  useCdn: true,                    
  apiVersion: '2024-01-01',        
})