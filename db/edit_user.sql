UPDATE users
SET username = ${username}
WHERE user_id = ${user_id}
returning *;