"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const data = [
    { icon: "😊", mood: "Happy", message: [""] },
    { icon: "🥲", mood: "Sad", message: [""] },
    { icon: "😠", mood: "Angry", message: [""] },
    { icon: "😶‍🌫️", mood: "Judged", message: [""] },
    { icon: "😐", mood: "Offended", message: [""] },
    { icon: "❌", mood: "Rejected", message: [""] },
    { icon: "🙏", mood: "Thankful", message: [""] },
    { icon: "💡", mood: "Inpired", message: [""] },
    { icon: "🤩", mood: "Motivated", message: [""] },
    { icon: "☹️", mood: "Depressed", message: [""] },
    { icon: "🥀", mood: "Desperate", message: [""] },
    { icon: "😖", mood: "Heavy", message: [""] },
    { icon: "😪", mood: "Fatigued", message: [""] },
    { icon: "", mood: "Drained", message: [""] },
    { icon: "😩", mood: "Weary", message: [""] },
    { icon: "", mood: "Insecure", message: [""] },
    { icon: "", mood: "Tense", message: [""] },
    { icon: "", mood: "Panicky", message: [""] },
    { icon: "", mood: "Terrified", message: [""] },
    { icon: "", mood: "Embarrased", message: [""] },
    { icon: "", mood: "Humiliated", message: [""] },
    { icon: "", mood: "Guilty", message: [""] },
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
      <div className="text-xl/10 text-black/90 text-justify">
        {"Hello beautiful! 🥀💗, I have made messages for when you're feeling things. Feel free to open whichever you're feeling right now"}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            key={item.mood}
            className="p-4 border border-pink-500 rounded-lg bg-white/40 shadow-md flex flex-col gap-2"
          >
            <p className="text-4xl text-center">{item.icon}</p>
            <h2 className="text-xl font-semibold text-center">
              {"For when you're feeling "}{item.mood}
            </h2>
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
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
