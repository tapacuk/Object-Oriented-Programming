using FileLogic;
using Domain;
using System.Text;
using System.Text.RegularExpressions;

namespace StudList
{
    public class DatabaseManager
    {
        private readonly FileManager fm = new FileManager();

        public void AddToDB()
        {
            string name, surname, gender, occupation;

            Console.Write("name: ");
            name = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(name))
                while (string.IsNullOrWhiteSpace(name))
                {
                    Console.Write("name can't be empty! enter name: ");
                    name = Console.ReadLine();
                }

            Console.Write("surname: ");
            surname = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(surname))
                while (string.IsNullOrWhiteSpace(name))
                {
                    Console.WriteLine("surname can't be empty! enter surname: "); ;
                    surname = Console.ReadLine();
                }


            Console.Write("gender: ");
            gender = Console.ReadLine();

            if (gender.ToLower() is not ("male" or "female"))
                gender = "N/A";

            Console.Write("occupation (Student, Photographer or Joiner): ");
            occupation = Console.ReadLine().ToLower();

            if (occupation != "student" && occupation != "photographer" && occupation != "joiner")
                while (occupation != "student" && occupation != "photographer" && occupation != "joiner")
                {
                    Console.Write("error. please, enter available occupation: ");
                    occupation = Console.ReadLine().ToLower();
                }

            if (occupation == "student")
            {
                Console.Write("student's residence (city): ");
                string residence = Console.ReadLine();

                Console.Write("student's course (number): ");
                string course = Console.ReadLine();

                Console.Write("student's ID: ");
                string studentID = Console.ReadLine();

                string patternStudID = @"^\d{6}$";
                if (!Regex.IsMatch(studentID, patternStudID))
                    while (!Regex.IsMatch(studentID, patternStudID))
                    {
                        Console.Write("incorrect format. (eg: 0123456). please try again: ");
                        studentID = Console.ReadLine();
                    }

                Console.Write("student's grade book ID: ");
                string gradeBookID = Console.ReadLine();

                string patternGrade = @"^[A-Z]{2}\d{5}$";
                if (!Regex.IsMatch(gradeBookID, patternGrade))
                    while (!Regex.IsMatch(gradeBookID, patternGrade))
                    {
                        Console.Write("incorrect format. (eg: AB12345). please try again: ");
                        gradeBookID = Console.ReadLine();
                    }

                Student student = new Student(name, surname, gender, residence, course, studentID, gradeBookID);
                fm.WriteFile(student.FormatToObj(), "Students");
            }

            if (occupation == "photographer")
            {
                Photographer photographer = new Photographer(name, surname, gender);
                fm.WriteFile(photographer.FormatToObj(), "Photographers");
            }

            if (occupation == "joiner")
            {
                Joiner joiner = new Joiner(name, surname, gender);
                fm.WriteFile(joiner.FormatToObj(), "Joiners");
            }
        }

        public void ShowDB()
        {
            string input;

            Console.WriteLine("enter name of occupation: Students, Photographers or Joiners");
            Console.Write(": ");
            input = Console.ReadLine().ToLower();

            if (input != "students" && input != "photographers" && input != "joiners")
            {
                while (input != "students" && input != "photographers" && input != "joiners")
                {
                    Console.WriteLine("error. invalid choice.");
                    Console.WriteLine("enter name of occupation: Students, Photographers or Joiners");
                    Console.Write(": ");
                    input = Console.ReadLine().ToLower();
                }
            }

            string[] lines = fm.ReadFile($"{string.Concat(input.First().ToString().ToUpper(), input.AsSpan(1))}");

            Console.WriteLine($"{string.Concat(input.First().ToString().ToUpper(), input.AsSpan(1))}: ");

            for (int i = 0; i < lines.Length; i++)
            {
                string line = lines[i].Trim();

                if (line.StartsWith("Student"))
                {

                    string[] attributes = new string[7];
                    for (int j = 0; j < attributes.Length; j++)
                        attributes[j] = lines[++i].Split(':')[1].Replace("\"", "").Replace(",", "").Replace("};", "").Trim();

                    string name = attributes[0];
                    string surname = attributes[1];
                    string gender = attributes[2];
                    string residence = attributes[3];
                    string course = attributes[4];
                    string studID = attributes[5];
                    string gradeID = attributes[6];

                    Student st = new Student(name, surname, gender, residence, course, studID, gradeID);
                    Console.WriteLine(st.FormatToText());
                }

                if (line.StartsWith("Photographer"))
                {
                    string[] attributes = new string[3];
                    for (int j = 0; j < attributes.Length; j++)
                        attributes[j] = lines[++i].Split(':')[1].Replace("\"", "").Replace(",", "").Replace("};", "").Trim();

                    string name = attributes[0];
                    string surname = attributes[1];
                    string gender = attributes[2];

                    Photographer pht = new Photographer(name, surname, gender);
                    Console.WriteLine(pht.FormatToText());
                }

                if (line.StartsWith("Joiner"))
                {
                    string[] attributes = new string[3];
                    for (int j = 0; j < attributes.Length; j++)
                        attributes[j] = lines[++i].Split(':')[1].Replace("\"", "").Replace(",", "").Replace("};", "").Trim();

                    string name = attributes[0];
                    string surname = attributes[1];
                    string gender = attributes[2];

                    Joiner jnr = new Joiner(name, surname, gender);
                    Console.WriteLine(jnr.FormatToText());
                }
            }
        }

        public void DeleteFromDB()
        {
            string input;

            Console.WriteLine("enter name of occupation: Students, Photographers or Joiners");
            Console.Write(": ");
            input = Console.ReadLine().ToLower();

            if (input != "students" && input != "photographers" && input != "joiners")
            {
                while (input != "students" && input != "photographers" && input != "joiners")
                {
                    Console.WriteLine("error. invalid choice.");
                    Console.WriteLine("enter name of occupation: Students, Photographers or Joiners");
                    Console.Write(": ");
                    input = Console.ReadLine().ToLower();
                }
            }

            Console.Write("enter full name of person you want to remove from database: ");
            string keyword = Console.ReadLine();

            string inputNormalized = string.Concat(input.First().ToString().ToUpper(), input.AsSpan(1));
            string[] lines = fm.ReadFile($"{inputNormalized}");

            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < lines.Length; i++)
            {
                StringBuilder block = new StringBuilder();
                block.AppendLine(lines[i]);

                while (i + 1 < lines.Length)
                {
                    block.AppendLine(lines[++i]);
                    if (lines[i].Trim().EndsWith("};")) break;
                }

                string blockStr = block.ToString();

                if (!blockStr.Contains(keyword))
                {
                    sb.Append(blockStr);
                }
            }

            string[] newLines = sb.ToString()
                .Split(new[] { '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries);

            fm.EditFile(newLines, inputNormalized);
            Console.WriteLine("object deleted");
        }

        public void OnFifthCourseKyivFemaleStudent()
        {
            string[] lines = fm.ReadFile("Students");

            int count = 0;
            StringBuilder block = new StringBuilder();

            foreach (string line in lines)
            {
                block.AppendLine(line.Trim());

                if (line.Trim().EndsWith("};"))
                {
                    string blockStr = block.ToString();
                    if (blockStr.Contains("\"course\": \"5\"") &&
                        blockStr.Contains("\"gender\": \"female\"") &&
                        blockStr.Contains("\"residence\": \"Kyiv\""))
                    {
                        count++;
                    }
                    block.Clear();
                }
            }

            Console.WriteLine($"amount of fifth course female students from kyiv: {count}");
        }

    }
}