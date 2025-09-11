namespace Domain
{
    public class Student : Person, IMultiplyBigNumbers
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
            throw new NotImplementedException(); // temp
        }

        public void Study()
        {
            //
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