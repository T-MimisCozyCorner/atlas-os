export function ProductDescription({
  productId,
  description,
  action,
}: {
  productId: string;
  description?: string | null;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="card">
      <input type="hidden" name="id" value={productId} />

      <h3 className="mb-3 text-xl font-black">Product Description</h3>

      <textarea
        name="description"
        className="input min-h-40 text-sm leading-6"
        defaultValue={description || ""}
      />

      <button className="btn-primary mt-4" type="submit">
        Save Description
      </button>
    </form>
  );
}
