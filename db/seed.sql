-- user table seed
create table users (
    user_id serial primary key,
    username varchar(50),
    hash varchar(200),
    email varchar(150),
    notifications boolean default false,
    notifs_id varchar(150)
);

insert into users (
    username,
    hash,
    email,
    notifications
) values (
    'spencer',
    '$2a$10$BU77h6.8gpKzZw0iOnVIK.65JVAPQl48r1HITwYZ7woHWJRzntLIq',
    'spencerlee96@gmail.com',
    true
);

create table medsDB (
    entry_id serial primary key,
    med_hash varchar(10),
    med_name varchar(200),
    dose varchar(200),
    drug_sheet varchar(100)
);

insert into medsDB (
    med_hash,
    med_name,
    dose,
    drug_sheet
) values (
    14425,
    'Adderall',
    '30mg',
    'https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/011522s043lbl.pdf'
);

create table user_meds (
    entry_id serial primary key,
    foreign key (user_id) references users(user_id),
    foreign key (med_hash) references medsDB(med_hash)
);