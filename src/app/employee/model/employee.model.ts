export interface IEmployee {
  employee_age: number | undefined;
  employee_name: string | undefined;
  employee_salary: number | undefined;
  id?: number | undefined;
  profile_image: string | undefined;
}

export class Employee implements IEmployee {
  employee_age: number | undefined;
  employee_name: string | undefined;
  employee_salary: number | undefined;
  id?: number | undefined;
  profile_image: string | undefined;
}
