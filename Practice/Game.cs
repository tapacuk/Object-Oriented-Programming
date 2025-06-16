namespace SteamLibraryFilter
{
    public class Game
    {
        public string? Title { get; set; }
        public string? Developer { get; set; }
        public string? Genre { get; set; }
        public string? Subgenre { get; set; }

        public Game() { }

        public Game(string title, string dev, string genre, string subgenre)
        {
            Title = title;
            Developer = dev;
            Genre = genre;
            Subgenre = subgenre;
        }

        public override string ToString()
        {
            return $"{Title} by {Developer} | {Genre}, {Subgenre}";
        }
    }
}
