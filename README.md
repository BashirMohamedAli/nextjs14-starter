# Next.js TypeScript + Next Auth + Prisma Boilerplate

Welcome to the Next.js TypeScript + Next Auth + Prisma Boilerplate, your advanced starting point for crafting web applications with cutting-edge technologies.

## Features

- Next.js 14 with TypeScript: The latest version of Next.js, a popular React framework for building full-stack applications, with TypeScript support for enhanced type checking and developer productivity.
- Prisma: A modern database toolkit that simplifies database access and management.
- PostgreSQL: A powerful open-source relational database management system.
- Shadcn/ui: A UI component library for creating beautiful and responsive user interfaces.
- Google Login: Integration with Google authentication for user login and authorization.
- Next Auth v5: A flexible authentication library for Next.js applications.

## Getting Started

To get started with this boilerplate, follow the steps below:

1. Clone the repository to your local machine:

```shell
git clone https://github.com/BashirMohamedAli/nextjs14-starter.git
```

2. Install the dependencies:

```shell
cd nextjs14-starter
npm install
```


3. Set up the environment variables:

`.env` file in the root directory of the project and add the following variables:

```dotenv
# PostgreSQL database configuration
DATABASE_URL="your-database-connection"

# Next Auth configuration
AUTH_SECRET="your-auth-secret"
AUTH_URL="http://localhost:3000/api/auth"

# Google Login configuration
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
```

4. Set up the database:

```shell
npx prisma migrate dev
```

5. Start the development server:

```shell
npm dev
```

## Folder Structure

The project structure is organized as follows:

```
├── components/       # Reusable React components
├── app/              # Next.js app router
├── prisma/           # Prisma database schema and migrations
├── public/           # Publicly accessible files (e.g., images)
├── styles/           # CSS stylesheets
├── .env              # Environment variables
└── next.config.ts    # Next.js configuration
└── tsconfig.json     # TypeScript configuration
```

Feel free to modify the folder structure to fit your project's needs.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on [GitHub](https://github.com/BashirMohamedAli/nextjs14-starter).

## License

This project is licensed under the [MIT License](LICENSE).

