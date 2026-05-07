import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUser = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  // todo:revalidate cache
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }
  return data;
};

export const createUser = async (formData) => {
  "use server";

  const newUser = Object.fromEntries(formData.entries());
  console.log(newUser);
  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  });
  // TODO

  const data = await res.json();
  if (data.insertedId) {
    revalidatePath("/users");
  }
  return data;
};

export const updateUser = async (userId, formData) => {
  "use server";
  const updatedUser = Object.fromEntries(formData.entries());

  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(updatedUser),
  });

  const data = await res.json();
  console.log(data);
  if (data.modifiedCount > 0) {
    revalidatePath("/users");
    redirect("/users");
  }

  return data;
};
