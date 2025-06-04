"use client";
import React from "react";
import { useForm } from "react-hook-form";

export function InputForm() {
  type FormValues = {
    name: string;
    email: string;
    age: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("送信データ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", {
            required: "名前は必須です",
          })}
          className="border-1"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
              message: "メールアドレスの形式が正しくありません",
            },
          })}
          className="border-1"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          {...register("age", {
            required: "年齢は必須です",
            min: { value: 18, message: "18歳以上である必要があります" },
            max: { value: 100, message: "100歳以下である必要があります" },
          })}
          className="border-1"
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>
      <button type="submit">送信</button>
    </form>
  );
}
