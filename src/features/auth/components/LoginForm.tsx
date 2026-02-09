import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DEFAULT_CREDENTIALS } from '@/features/auth/constants';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(DEFAULT_CREDENTIALS.email);
  const [password, setPassword] = useState(DEFAULT_CREDENTIALS.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Zap className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground">Pluggon</h1>
          <p className="mt-1 text-sm text-muted-foreground">Acesse a plataforma</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card space-y-4 rounded-lg p-6">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-xs">Senha</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" variant="hero" className="w-full gap-2">
            <LogIn className="h-4 w-4" />
            Entrar
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Credenciais de demo preenchidas automaticamente
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
