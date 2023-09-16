
export default async function create(formData) {
  try {
    await createItem(formData.get('item'))
    revalidatePath('/')
    return { message: 'Success!' }
  } catch (e) {
    return { message: 'There was an error.' }
  }
}