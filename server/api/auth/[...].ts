import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials';

export default NuxtAuthHandler({
    secret: 'ZAPNuxtApp@2024!',
});