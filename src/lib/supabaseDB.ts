import { supabase } from './supabaseClient';

export async function findAll(table: string) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) throw error;
  return data;
}

export async function findById(table: string, id: string) {
  const { data, error } = await supabase.from(table).select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

export async function insert(table: string, record: any) {
  const { data, error } = await supabase.from(table).insert(record).select().single();
  if (error) throw error;
  return data;
}

export async function insertMany(table: string, records: any[]) {
  const { data, error } = await supabase.from(table).insert(records);
  if (error) throw error;
  return data;
}

export async function updateOne(table: string, id: string, updates: any) {
  const { data, error } = await supabase.from(table).update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

export async function deleteOne(table: string, id: string) {
  const { data, error } = await supabase.from(table).delete().eq('id', id).select().single();
  if (error) throw error;
  return data;
}
