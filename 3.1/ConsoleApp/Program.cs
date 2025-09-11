using FileLogic;


namespace StudList
{
    class Program
    {
        static void Main(string[] args)
        {
            FileManager fm = new FileManager();
            // fm.WriteFile(new string[] { $"{1}" });

            ConsoleMenu cm = new ConsoleMenu(fm);
            cm.ShowMenu();
        }
    }
}