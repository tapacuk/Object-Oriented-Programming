using System.Security.Cryptography.X509Certificates;

namespace StudList
{
    public class ConsoleMenu
    {
        public DatabaseManager dbmanager = new DatabaseManager();

        public ConsoleMenu()
        {
            Console.WriteLine("welcome to studlist manager");
        }

        public void ShowMenu()
        {
            while (true)
            {
                Console.WriteLine("=-=-=-=-=-=-choose an option=-=-=-=-=-=-=");
                Console.WriteLine("1 | add person to db");
                Console.WriteLine("2 | show everyone");
                Console.WriteLine("3 | delete person from db");
                Console.WriteLine("4 | show female students from fifth course that live in Kyiv");
                Console.WriteLine("\n0 | end");

                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        dbmanager.AddToDB();
                        break;
                    case "2":
                        dbmanager.ShowDB();
                        break;
                    case "3":
                        dbmanager.DeleteFromDB();
                        break;
                    case "4":
                        dbmanager.OnFifthCourseKyivFemaleStudent();
                        break;
                    case "0":
                        return;
                    default:
                        Console.WriteLine("incorrect choice. press any key to continue");
                        Console.ReadKey();
                        break;
                }
            }
        }

    }
}
