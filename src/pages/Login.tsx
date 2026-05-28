import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Lock, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating login
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md px-4"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary/30 mb-4 ring-4 ring-white">
            <Heart size={36} fill="currentColor" />
          </div>
          <h1 className="font-display text-3xl font-bold text-gray-900">Projeto Cativeiro</h1>
          <p className="text-muted-foreground mt-2 text-center text-balance">
            Bem-vindo ao sistema de gestão social. Transformando vidas através do cuidado.
          </p>
        </div>

        <Card className="border-none shadow-2xl shadow-slate-200/50">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Acessar Sistema</CardTitle>
            <CardDescription>
              Entre com suas credenciais de administrador.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    placeholder="nome@ong.org" 
                    type="email" 
                    className="pl-10" 
                    required 
                    defaultValue="admin@projeto.org"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Button variant="link" className="px-0 font-normal text-xs text-muted-foreground">
                    Esqueceu a senha?
                  </Button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    className="pl-10" 
                    required 
                    defaultValue="password123"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full h-11 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]" disabled={loading}>
                {loading ? "Verificando..." : (
                  <>
                    Entrar <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-8">
            Precisa de ajuda? <Button variant="link" className="p-0 h-auto font-medium">Contate o suporte técnico</Button>
        </p>
      </motion.div>
    </div>
  );
}
