import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://awoxxvcdbnjxbarpgmbr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3b3h4dmNkYm5qeGJhcnBnbWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMDU0NDUsImV4cCI6MjA2MDg4MTQ0NX0.kJuW6HMa0sser8hoVNtZXWWgZbUZooRedZDpX3f5aIU'

// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)