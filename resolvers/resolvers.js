import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await prisma.user.findMany();
      return users;
    },
  },

  Mutation: {
    addUser: async (_, { input }) => {
      try {
        const newUser = await prisma.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });

        return {
          code: 200,
          success: true,
          message: "User added successfully",
          newUser,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          newUser: null,
        };
      }
    },
  },
};
