// "use client";

// import React from "react";
// import { useFieldArray, useForm } from "react-hook-form";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import Button from "@/components/ui/button";
// import Input from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { formSchema } from "../@formField/schema/Schema";
// import { z } from "zod";

// const userArray = [
//   {
//     name: "Test",
//     emailUser: "test",
//     emailUrl: "@goole.com",
//   },
// ];

// function FormInputPage() {
//   const defaultValue = {
//     items: [],
//     switch: false,
//     date: null,
//     userArray: userArray,
//   };

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: defaultValue,
//   });

//   const { fields, append, remove } = useFieldArray({
//     name: "userArray",
//   });
//   return (
//     <>
//       {fields.map((item, index) => (
//         <div key={item.id} className="flex justify-center gap-2">
//           <FormField
//             control={form.control}
//             name={`userArray.${index}.name`}
//             render={({ field }) => (
//               <FormItem className="flex items-center gap-2">
//                 <FormLabel>name :</FormLabel>
//                 <FormControl>
//                   <Input
//                     onChange={field.onChange}
//                     value={field.value}
//                     className="w-[250px]"
//                   />
//                 </FormControl>
//                 <FormMessage className="text-red-500" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name={`userArray.${index}.emailUser`}
//             render={({ field }) => (
//               <FormItem className="flex items-center gap-2">
//                 <FormLabel>email :</FormLabel>
//                 <FormControl>
//                   <Input
//                     onChange={field.onChange}
//                     value={field.value}
//                     className="w-[250px]"
//                   />
//                 </FormControl>
//                 <FormMessage className="text-red-500" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name={`userArray.${index}.emailUrl`}
//             render={({ field }) => (
//               <FormItem>
//                 <Select onValueChange={field.onChange}>
//                   <FormControl>
//                     <SelectTrigger className="w-[150px] h-10 mt-2">
//                       <SelectValue placeholder="Select" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="@google.com">@google.com</SelectItem>
//                     <SelectItem value="@naver.com">@naver.com</SelectItem>
//                     <SelectItem value="@kakao.com">@kakao.com</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </FormItem>
//             )}
//           />
//           <Button
//             // onClick={() => onDelete(index)}
//             className="h-8 flex items-center justify-center mt-3"
//           >
//             DELETE
//           </Button>
//         </div>
//       ))}
//     </>
//   );
// }

// export default FormInputPage;
