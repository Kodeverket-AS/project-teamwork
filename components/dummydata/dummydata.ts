// create some dummydata based on the following structure from type.

type TContentItem = {
  id: number;
  title: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  location: string;
};
type TContent = TContentItem[];

export const dummydata: TContent = [
  {
    id: 1,
    title: "CEO",
    name: "John Doe",
    role: "CEO",
    phone: "12345678",
    email: "john.doe@example.com",
    image: "",
    location: "Oslo",
  },
  {
    id: 2,
    title: "CTO",
    name: "Jane Doe",
    role: "CTO",
    phone: "12345678",
    email: "jane.doe@example.com",
    image: "",
    location: "Trondheim",
  },
  {
    id: 3,
    title: "CFO",
    name: "John Smith",
    role: "CFO",
    phone: "12345678",
    email: "john.smith@example.com",
    image: "",
    location: "Bergen",
  },
  {
    id: 4,
    title: "CEO",
    name: "Bob Doe",
    role: "CEO",
    phone: "12345678",
    email: "bob.doe@example.com",
    image: "",
    location: "Oslo",
  },
  {
    id: 5,
    title: "CTO",
    name: "Lisa Doe",
    role: "CTO",
    phone: "12345678",
    email: "lisa.doe@example.com",
    image: "",
    location: "Trondheim",
  },
  {
    id: 6,
    title: "CFO",
    name: "Homer Smith",
    role: "CFO",
    phone: "12345678",
    email: "homer.smith@example.com",
    image: "",
    location: "Bergen",
  },
];
