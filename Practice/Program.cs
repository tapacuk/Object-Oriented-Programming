using System;
using System.Collections.Generic;

namespace SteamLibraryFilter
{
    class Program
    {
        static void Main(string[] args)
        {
            GameLibrary library = new GameLibrary();
            library.LoadFromFile();
            Console.WriteLine("Welcome to the Steam Library Filter!");

            while (true)
            {
                Console.WriteLine("Menu: ");
                Console.WriteLine("1. View all games");
                Console.WriteLine("2. Add a new game");
                Console.WriteLine("3. Filter games by genre");
                Console.WriteLine("4. Filter games by subgenre");
                Console.WriteLine("5. Exit\n");
                Console.Write("Choose an option: ");

                string choice = Console.ReadLine()?.Trim();
                Console.Clear();
                switch (choice)
                {
                    case "1":
                        Console.WriteLine("\nLibrary of Games");
                        foreach (var game in library.GetAllGames())
                        {
                            Console.WriteLine($"· {game}");
                        }

                        WriteExit();
                        break;

                    case "2":
                        Console.WriteLine("\nEnter game details to add:");
                        Console.Write("Game Title: ");
                        string title = Console.ReadLine();
                        Console.Write("Developer: ");
                        string dev = Console.ReadLine();
                        Console.Write("Genre: ");
                        string genre = Console.ReadLine();
                        Console.Write("Subgenre: ");
                        string subgenre = Console.ReadLine();

                        library.AddGame(new Game(title, dev, genre, subgenre));
                        library.SaveToFile();

                        Console.Clear();
                        Console.WriteLine("Game added and saved.\n\n");
                        break;

                    case "3":
                        Console.Write("\nEnter genre to filter: ");
                        string genreInput = Console.ReadLine();

                        List<Game> filtered = library.FilterByGenre(genreInput);

                        if (filtered.Count == 0)
                        {
                            Console.WriteLine("No games found of this genre.\n\n");
                            WriteExit();
                        }
                        else
                        {
                            Console.WriteLine($"\nGames of genre '{genreInput}':");
                            foreach (var game in filtered)
                            {
                                Console.WriteLine($"· {game}");
                            }
                            WriteExit();
                        }
                        break;
                        
                    case "4":
                        Console.Write("\nEnter subgenre to filter: ");
                        string subgenreInput = Console.ReadLine();

                        List<Game> filteredSub = library.FilterBySubGenre(subgenreInput);

                        if (filteredSub.Count == 0)
                        {
                            Console.WriteLine("No games found of this subgenre.\n\n");
                            WriteExit();
                        }
                        else
                        {
                            Console.WriteLine($"\nGames of subgenre '{subgenreInput}':");
                            foreach (var game in filteredSub)
                            {
                                Console.WriteLine($"· {game}");
                            }
                            WriteExit();
                        }
                        break;

                    case "5":
                        return;

                    default:
                        Console.WriteLine("Invalid choice, please try again.");
                        break;
                }
            }

        }

        static void WriteExit()
        {
            Console.Write("\nPress Enter to return to the menu...");
            Console.ReadLine();
            Console.Clear();
        }
    }
}
