-- employee query
SELECT e.id, e.first_name, e.last_name , title, salary, department.name AS department, CONCAT(m.first_name," ",m.last_name) AS Manager
FROM employee e
LEFT JOIN employee m on  m.id = e.manager_id
INNER JOIN role on e.role_id = role.id
Inner join department on role.department_id = department.id
ORDER BY id;

-- insert department query
INSERT INTO department (name)
VALUES
(?);


-- add role choices query
SELECT name FROM department;

-- insert into role
INSERT INTO role (title,salary,department_id)
VALUES
(?,?,?);

-- insert into emplyee
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES
(?,?,?,?);
