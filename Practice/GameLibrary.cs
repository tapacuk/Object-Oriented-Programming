using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace SteamLibraryFilter
{
    public class GameLibrary
    {
        private List<Game> games = new List<Game>();
        private static readonly string FilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..", "..", "..", "VNList.json");

        // private const string FilePath = "./games.json";

        public void AddGame(Game game)
        {
            games.Add(game);
        }

        public List<Game> GetAllGames()
        {
            return games;
        }

        public List<Game> FilterByGenre(string genre)
        {
            return games
                .Where(g => g.Genre?.Equals(genre, StringComparison.OrdinalIgnoreCase) == true)
                .ToList();
        }

        public List<Game> FilterBySubGenre(string subgenre)
        {
            return games
                .Where(g => g.Subgenre?.Equals(subgenre, StringComparison.OrdinalIgnoreCase) == true)
                .ToList();
        }

        public void SaveToFile()
        {
            string json = JsonSerializer.Serialize(games, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(FilePath, json);
        }

        public void LoadFromFile()
        {
            if (File.Exists(FilePath))
            {
                string json = File.ReadAllText(FilePath);
                var loadedGames = JsonSerializer.Deserialize<List<Game>>(json);
                if (loadedGames != null)
                {
                    games = loadedGames;
                }
            }
        }
    }
}
