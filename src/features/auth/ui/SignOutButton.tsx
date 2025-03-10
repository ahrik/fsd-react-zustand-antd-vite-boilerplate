import { LogoutOutlined } from '@ant-design/icons';
import { Button } from '@shared/ui/Button';
import { useSignOut } from '../model/useSignOut';

export function SignOutButton({ className }: { className?: string }) {
  const { signOut, isLoading } = useSignOut();

  return (
    <Button loading={isLoading} className={className} onClick={signOut} shape="circle" icon={<LogoutOutlined />} />
  );
}
