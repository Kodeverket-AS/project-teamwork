// create some dummydata based on the following structure from type.

type TLocation = "Alle" | "Oslo" | "Trondheim" | "Bergen";
type TLocations = TLocation[];

type TMember = {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  location: TLocation;
};

type TBook = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

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
      description: "A fascinating fiction book.",
      image: "",
      url: "http://example.com/book-one",
    },
    {
      id: 2,
      title: "Book Two",
      description: "An insightful non-fiction book.",
      image: "",
      url: "http://example.com/book-two",
    },
    {
      id: 3,
      title: "Book Three",
      description: "A thrilling science fiction book.",
      image: "",
      url: "http://example.com/book-three",
    },
    {
      id: 4,
      title: "Book Four",
      description: "A captivating mystery novel.",
      image: "",
      url: "http://example.com/book-four",
    },
    {
      id: 5,
      title: "Book Five",
      description: "An inspiring biography.",
      image: "",
      url: "http://example.com/book-five",
    },
    {
      id: 6,
      title: "Book Six",
      description: "A comprehensive history book.",
      image: "",
      url: "http://example.com/book-six",
    },
    {
      id: 7,
      title: "Book Seven",
      description: "A detailed science textbook.",
      image: "",
      url: "http://example.com/book-seven",
    },
    {
      id: 8,
      title: "Book Eight",
      description: "A fun children's book.",
      image: "",
      url: "http://example.com/book-eight",
    },
  ],
};
