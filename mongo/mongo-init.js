db.createUser({
  user: 'username',
  pwd: 'password',
  roles: [
    {
      role: 'dbOwner',
      db: 'database',
    },
  ],
});

db.createCollection('');
