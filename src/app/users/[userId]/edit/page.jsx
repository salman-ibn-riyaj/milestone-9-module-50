import { updateUser } from "@/lib/actions";
import { getUserById } from "@/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const EditPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);
    console.log(user)

    const updateUserWrapper = async(formData) =>{
        'use server'
        return updateUser(userId, formData)

    }
  return (
    <div className="p-5">
      <form action={updateUserWrapper} className="flex flex-col gap-4">
        <TextField className="w-full" defaultValue={user?.name} name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField defaultValue={user?.email} className="w-full" name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField defaultValue={user?.role} className="w-full" name="role" type="text">
          <Label>Role</Label>
          <Input placeholder="Enter your role" />
        </TextField>

       
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            Edit User
          </Button>
      
      </form>
    </div>
  );
};

export default EditPage;
