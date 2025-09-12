using FileLogic;


namespace StudList
{
    class Program
    {
        static void Main(string[] args)
        {
            FileManager fm = new FileManager();

            ConsoleMenu cm = new ConsoleMenu(fm);
            cm.ShowMenu();
        }
    }
}