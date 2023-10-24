const supabase = createClient("https://xjhmhbkpglyfedndqxeq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqaG1oYmtwZ2x5ZmVkbmRxeGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNTY3MjYsImV4cCI6MjAxMzczMjcyNn0.T9e1jDVJhp6Qpif23qz-Ch4Xf2Y5RvIlDODc_8b1MO8")

const { data, error } = await supabase
.from('users')
.select('')
console.log(data)
cookies().set({users:data})
    
