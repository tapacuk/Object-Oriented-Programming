namespace Domain
{
    public class Student : Person, IMultiplyBigNumbers, IEntityStringOutput
    {
        public string? course { get; set; }
        public string? studentID { get; set; }
        public string? residence { get; set; }
        public string? gradeBookID { get; set; }

        public Student(string name, string surname, string gender, string residence, string course, string studentID, string gradeBookID)
        {
            this.name = name;
            this.surname = surname;
            this.gender = gender;
            this.residence = residence;
            this.course = course;
            this.studentID = studentID;
            this.gradeBookID = gradeBookID;
        }

        public void MultiplyBigNumber()
        {
            Console.WriteLine($"{name} {surname} counting big numbers...");
        }

        public void Study()
        {
            Random random = new Random();
            int chance = random.Next(0, 100);

            if (chance < 50)
                Console.WriteLine($"{name} studying hard...");
            else if (chance > 50)
                Console.WriteLine($"{name} studying...");
            else
                Console.WriteLine($"{name} not studying.. at all?...");
        }

        public string[] FormatToObj()
        {
            return new string[]
            {
            $"Student {name} {surname}",
            $"{{ \"firstname\": \"{name}\",",
            $"\"lastname\": \"{surname}\",",
            $"\"gender\": \"{gender}\",",
            $"\"residence\": \"{residence}\",",
            $"\"course\": \"{course}\",",
            $"\"studentid\": \"{studentID}\",",
            $"\"gradebookid\": \"{gradeBookID}\"}};"
            };
        }

        public string FormatToText()
        {
            return $"   {name} {surname}, {gender}, Residence: {residence}, Course: {course}, ID: {studentID}, Gradebook ID: {gradeBookID}";
        }
    }
}