const newUser = async token => {
  const api = '/api/user';
  const res = await fetch(api, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  return data.data;
};

const fetchUser = async token => {
  const api = '/api/users';
  const res = await fetch(api, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  return data.data[0];
};

const updateUser = async user => {
  const api = `/api/user/${user._id}`;
  // this hasnt been tested yet

  const res = await fetch(api, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await res.json();
};

export default { newUser, fetchUser, updateUser };
