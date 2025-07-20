"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const data = [
    {
      icon: "💔",
      mood: "For when you miss me",
      message: [
        "Test Message",
        "Isa pang test message mas mahaba tinitignan ko lang gano kahaba pwede kong isulat dito sana naman d pa to lumalagpas",
        "pangatlong test message sybau",
      ],
    },
    { icon: "😊", mood: "For when you're feeling happy", message: [""] },
    { icon: "🥲", mood: "For when you're feeling sad", message: [""] },
    { icon: "😠", mood: "For when you're feeling angry", message: [""] },
    { icon: "😶‍🌫️", mood: "For when you're feeling judged", message: [""] },
    { icon: "😐", mood: "For when you're feeling offended", message: [""] },
    { icon: "❌", mood: "For when you're feeling rejected", message: [""] },
    { icon: "🙏", mood: "For when you're feeling thankful", message: [""] },
    { icon: "💡", mood: "For when you're feeling inpired", message: [""] },
    { icon: "🤩", mood: "For when you're feeling motivated", message: [""] },
    { icon: "☹️", mood: "For when you're feeling depressed", message: [""] },
    { icon: "🥀", mood: "For when you're feeling desperate", message: [""] },
    { icon: "😖", mood: "For when you're feeling heavy", message: [""] },
    { icon: "😪", mood: "For when you're feeling fatigued", message: [""] },
    { icon: "🫠", mood: "For when you're feeling drained", message: [""] },
    { icon: "🫂", mood: "For when you're feeling lonely", message: [""] },
    { icon: "😩", mood: "For when you're feeling weary", message: [""] },
    { icon: "🫥", mood: "For when you're feeling insecure", message: [""] },
    { icon: "😬", mood: "For when you're feeling tense", message: [""] },
    { icon: "🫨", mood: "For when you're feeling panicky", message: [""] },
    { icon: "😰", mood: "For when you're feeling terrified", message: [""] },
    { icon: "😳", mood: "For when you're feeling embarrased", message: [""] },
    { icon: "🤕", mood: "For when you're feeling humiliated", message: [""] },
    { icon: "😓", mood: "For when you're feeling guilty", message: [""] },
  ];

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mood = formData.get("mood");
    const selected = data.find((item) => item.mood === mood);
    if (selected && selected.message.length > 0) {
      const randomIndex = Math.floor(Math.random() * selected.message.length);
      setMessage(selected.message[randomIndex]);
      console.log(`Selected message: ${selected.message[randomIndex]}`);
    }
    open();
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-xl/10 text-black/90 2xl:text-justify text-center">
        {
          "Hello beautiful! 💗 I have made messages for when you're feeling things. Feel free to open whichever you're feeling right now"
        }
      </div>
      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            key={item.mood}
            className="p-4 border border-pink-500 rounded-lg bg-white/40 shadow-md flex flex-col gap-2"
          >
            <p className="text-4xl text-center">{item.icon}</p>
            <h2 className="text-xl font-semibold text-center">{item.mood}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="mood"
                defaultValue={item.mood}
                className="hidden"
              />
              <input
                type="submit"
                value={"💌 open me"}
                className="w-full inline-flex items-center gap-2 rounded-md bg-pink-700 px-3 py-1.5 font-semibold text-white shadow-inner shadow-white/10 text-lg hover:bg-pink-600 hover:cursor-pointer transition-colors duration-200"
              />
            </form>
          </div>
        ))}
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black uppercase text-center"
              >
                {"I hope you're doing okay 🥀💗"}
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
  );
}
