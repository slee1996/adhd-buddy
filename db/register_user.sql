insert into users (
    username,
    hash,
    email,
    notifications
) values (
    ${username},
    ${hash},
    ${email},
    false
)
returning username, user_id;