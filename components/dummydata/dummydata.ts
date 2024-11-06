// create some dummydata based on the following structure from type.

type TMember = {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  location: string;
};

type TBook = {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
};

type TLocation = "Alle" | "Oslo" | "Trondheim" | "Bergen";

type TLocations = TLocation[];

type TTeamData = {
  members: TMember[];
  locations: TLocations;
};

type TBooksData = TBook[];

type TDummyData = {
  teamData: TTeamData;
  booksData: TBooksData;
};

export const dummyData: TDummyData = {
  teamData: {
    members: [
      {
        id: 1,
        name: "John Doe",
        role: "CEO",
        phone: "12345678",
        email: "john.doe@example.com",
        image: "",
        location: "Oslo",
      },
      {
        id: 2,
        name: "Jane Doe",
        role: "CTO",
        phone: "12345678",
        email: "jane.doe@example.com",
        image: "",
        location: "Trondheim",
      },
      {
        id: 3,
        name: "John Smith",
        role: "CFO",
        phone: "12345678",
        email: "john.smith@example.com",
        image: "",
        location: "Bergen",
      },
      {
        id: 4,
        name: "Bob Doe",
        role: "CEO",
        phone: "12345678",
        email: "bob.doe@example.com",
        image: "",
        location: "Oslo",
      },
      {
        id: 5,
        name: "Lisa Doe",
        role: "CTO",
        phone: "12345678",
        email: "lisa.doe@example.com",
        image: "",
        location: "Trondheim",
      },
      {
        id: 6,
        name: "Homer Smith",
        role: "CFO",
        phone: "12345678",
        email: "homer.smith@example.com",
        image: "",
        location: "Bergen",
      },
    ],
    locations: ["Alle", "Oslo", "Trondheim", "Bergen"],
  },
  booksData: [
    {
      id: 1,
      title: "Book One",
      author: "Author One",
      genre: "Fiction",
      publishedYear: 2001,
    },
    {
      id: 2,
      title: "Book Two",
      author: "Author Two",
      genre: "Non-Fiction",
      publishedYear: 2002,
    },
    {
      id: 3,
      title: "Book Three",
      author: "Author Three",
      genre: "Science Fiction",
      publishedYear: 2003,
    },
  ],
};
