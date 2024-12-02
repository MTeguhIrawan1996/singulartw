import { z } from 'zod';

export const zRequiredString = z
  .string()
  .min(1, { message: 'Kolom tidak boleh kosong' });

export const zOptionalString = z.string();

export const zRequiredEmail = z
  .string()
  .min(1, { message: 'Kolom tidak boleh kosong' })
  .email({ message: 'Format email salah' });

export const zOptionalEmail = z
  .string()
  .email({ message: 'Format email salah' })
  .or(z.literal(''));

export const zRequiredPassword = z
  .string()
  .min(8, { message: 'Kata sandi minimal 8 karakter' })
  .regex(/^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]*$/, {
    message: 'Format kata sandi salah',
  });

export const zRequiredDate = z.date({
  required_error: 'Kolom tidak boleh kosong',
  invalid_type_error: 'Kolom tidak boleh kosong / Format tanggal salah',
});

export const zOptionalDate = z
  .date({
    required_error: 'Kolom tidak boleh kosong',
    invalid_type_error: 'Kolom tidak boleh kosong / Format tanggal salah',
  })
  .optional()
  .nullable();
