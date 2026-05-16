import EditNote from "@/components/edit-note-form";
type Props = {
  params: Promise<{ id: string }>;
};
export default async function EditPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="flex justify-center py-20 bg-black">
      <EditNote id={id} />
    </div>
  );
}
