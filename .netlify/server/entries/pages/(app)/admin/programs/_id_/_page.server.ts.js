import { c as client } from "../../../../../../chunks/prisma.js";
const load = async (event) => {
  const getProgram = async () => {
    const program = await client.program.findUnique({
      where: {
        id: event.params.id
      }
    });
    return program;
  };
  return {
    program: await getProgram()
  };
};
export {
  load
};
