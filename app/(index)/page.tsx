"use client";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import TextCursor from "@/components/TextCursor";
import { createAccess } from "@/utils/access-log";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, useEffect } from "react";

type Mood = {
  _id: string;
  mood: string;
  icon: string;
  message: string[];
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// TO DO: Add logging for opened mood messages to prevent it from showing the same message repeatedly on the same session
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState<Mood[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/moods");
      if (res.ok) {
        const moods = await res.json();

        moods.forEach((mood: Mood, i: number) => {
          delay(i * 100).then(() => {
            setData((prevData) => [...prevData, mood]);
          });
        });
      }
    };
    fetchData();
  }, []);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const moodId = formData.get("moodId");
    const selected = data.find((item) => item._id === moodId);
    if (selected && selected.message.length > 0) {
      const randomIndex = Math.floor(Math.random() * selected.message.length);
      setMessage(selected.message[randomIndex]);
      formData.set("mood", selected.mood);
      formData.set("message", selected.message[randomIndex]);
      console.log(`Selected message: ${selected.message[randomIndex]}`);
      createAccess(formData);
    }
    open();
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 z-10">
        <div className="text-xl/10 text-black/90 2xl:text-justify text-center z-10">
          {
            "Hello beautiful! 💗 I have made messages for when you're feeling things. Feel free to open whichever you're feeling right now"
          }
        </div>
        {data.length > 0 ? (
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 z-10 text-black/80">
            {data.map((item, i) => (
              <FadeContent
                key={item._id}
                blur={true}
                duration={100}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="h-full p-4 border border-pink-500 rounded-lg bg-white/40 shadow-md flex flex-col gap-2">
                  <p className="text-4xl text-center">{item.icon}</p>
                  <pre className="text-lg font-normal text-center text-wrap">
                    {item.mood}
                  </pre>
                  <form onSubmit={handleSubmit} className="mt-auto">
                    <input
                      type="text"
                      name="moodId"
                      defaultValue={item._id}
                      className="hidden"
                    />
                    <input
                      type="submit"
                      value={"💌 open me"}
                      className="w-full inline-flex items-center gap-2 rounded-md bg-pink-700 px-3 py-1.5 font-semibold text-white shadow-inner shadow-white/10 text-lg hover:bg-pink-600 hover:cursor-pointer transition-colors duration-200"
                    />
                  </form>
                </div>
              </FadeContent>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 z-10">
            <div className="p-4 border border-pink-500 rounded-lg bg-white/40 shadow-md flex flex-col gap-2 items-center">
              <div className="skeleton h-10 w-10"></div>
              <div className="skeleton h-4 w-30 xl:w-40"></div>
              <div className="skeleton h-8 w-38 xl:w-64"></div>
            </div>
            <div className="p-4 border border-pink-500 rounded-lg bg-white/40 shadow-md flex flex-col gap-2 items-center">
              <div className="skeleton h-10 w-10"></div>
              <div className="skeleton h-4 w-30 xl:w-40"></div>
              <div className="skeleton h-8 w-38 xl:w-64"></div>
            </div>
            <div className="p-4 border border-pink-500 rounded-lg bg-white/40 shadow-md flex flex-col gap-2 items-center">
              <div className="skeleton h-10 w-10"></div>
              <div className="skeleton h-4 w-30 xl:w-40"></div>
              <div className="skeleton h-8 w-38 xl:w-64"></div>
            </div>
            <div className="p-4 border border-pink-500 rounded-lg bg-white/40 shadow-md flex flex-col gap-2 items-center">
              <div className="skeleton h-10 w-10"></div>
              <div className="skeleton h-4 w-30 xl:w-40"></div>
              <div className="skeleton h-8 w-38 xl:w-64"></div>
            </div>
          </div>
        )}

        <Dialog
          open={isOpen}
          as="div"
          className="relative z-100 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-100 w-screen overflow-y-auto bg-black/50 backdrop-blur-sm">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-black uppercase text-center"
                >
                  {"Hi Elaine!! 🫶"}
                </DialogTitle>
                <p className="mt-2 text-md/6 text-black/80 text-justify">
                  {message}
                </p>
                <div className="mt-4">
                  <Button
                    className="w-full text-center gap-2 rounded-md bg-pink-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-pink-600 data-open:bg-pink-700"
                    onClick={close}
                  >
                    Close
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
      <TextCursor
        text="🐈"
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />
    </>
  );
}
