SELECT role.id AS id,first_name,last_name, title, salary
FROM department
INNER JOIN role ON department.id = role.department_id
INNER JOIN employee ON role.id = employee.role_id
ORDER BY id;

SELECT e.id, e.first_name, e.last_name , title, salary, department.name AS department, CONCAT(m.first_name," ",m.last_name) AS Manager
FROM employee e
LEFT JOIN employee m on  m.id = e.manager_id
INNER JOIN role on e.role_id = role.id
Inner join department on role.department_id = department.id
ORDER BY id;



-- SELECT role.id AS id,employee.first_name,employee.last_name, title, salary, CONCAT(m.first_name," ",m.last_name) AS Manager
-- FROM department
-- INNER JOIN role ON department.id = role.department_id
-- INNER JOIN employee ON role.id = employee.role_id
-- left JOIN employee e on  m.id = e.manager_id
-- ORDER BY id;

-- SELECT CONCAT(e.first_name," ",e.last_name) AS Employee, CONCAT(m.first_name," ",m.last_name) AS Manager
-- FROM employee e
