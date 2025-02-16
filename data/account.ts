import { prisma } from "@/prisma/prisma";

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await prisma.account.findFirst({
      where: {
        userId,
      },
    });
    return account;
  } catch (error) {
    console.error("Error fetching account:", error);
    return null;
  }
};
