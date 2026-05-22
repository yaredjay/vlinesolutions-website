export type Client = {
  id: string;
  name: string;
  short: string;
  category: "Federal" | "State & Local" | "City";
  src: string;
  width: number;
  height: number;
};

export const clients: Client[] = [
  {
    id: "dod",
    name: "U.S. Department of Defense",
    short: "U.S. Dept. of Defense",
    category: "Federal",
    src: "/logos/dod.png",
    width: 600,
    height: 599,
  },
  {
    id: "us-air-force",
    name: "United States Air Force",
    short: "U.S. Air Force",
    category: "Federal",
    src: "/logos/us-air-force.png",
    width: 3840,
    height: 2161,
  },
  {
    id: "san-jose",
    name: "City of San Jose",
    short: "City of San Jose",
    category: "City",
    src: "/logos/san-jose.png",
    width: 1752,
    height: 990,
  },
  {
    id: "virginia-beach",
    name: "City of Virginia Beach",
    short: "Virginia Beach",
    category: "City",
    src: "/logos/virginia-beach.png",
    width: 1142,
    height: 1143,
  },
  {
    id: "cleveland",
    name: "City of Cleveland",
    short: "City of Cleveland",
    category: "City",
    src: "/logos/cleveland.png",
    width: 587,
    height: 587,
  },
  {
    id: "anne-arundel",
    name: "Anne Arundel County, Maryland",
    short: "Anne Arundel County",
    category: "State & Local",
    src: "/logos/anne-arundel-county.png",
    width: 441,
    height: 498,
  },
  {
    id: "montgomery",
    name: "Montgomery County, Maryland",
    short: "Montgomery County",
    category: "State & Local",
    src: "/logos/montgomery-county.png",
    width: 600,
    height: 600,
  },
  {
    id: "hawaii",
    name: "Hawaiʻi County",
    short: "Hawaiʻi County",
    category: "State & Local",
    src: "/logos/hawaii-county.png",
    width: 3840,
    height: 3840,
  },
];
