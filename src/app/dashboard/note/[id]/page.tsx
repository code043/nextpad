import Note from "@/components/note";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="flex justify-center py-20 bg-black">
      <Note id={id} />
    </div>
  );
}
