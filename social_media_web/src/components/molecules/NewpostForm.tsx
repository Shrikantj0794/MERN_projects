
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,  Input} from "@nextui-org/react";
import {useForm} from 'react-hook-form'
import{ref, uploadBytes} from 'firebase/storage'
import { bucket } from "../../lib/firebase";


export default function NewPostForm() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {register, handleSubmit} = useForm();
  const storageRef = ref(bucket, "posts/post1")
  
    async function onSubmit(values:any){
        uploadBytes(storageRef, values.image).then((snapshot)=>{
            console.log('upload a blob or file')
        });

    }

  return (
    <>
      <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  autoFocus
                  type="file"
                  accept=".jpeg"
                  label="Image"
                  placeholder="uploade your post"
                  variant="bordered"
                  {...register("image")}
                />
                <Button color="primary" type="submit" onPress={onClose}>
                  Upload
                </Button>
                </form>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
