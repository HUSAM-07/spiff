"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Copy } from 'lucide-react';
import NavigationMenu from '../../components/NavigationMenu'; // Import the NavigationMenu component

interface Password {
  id: number;
  website: string;
  username: string;
  password: string;
}

export default function Dashboard() {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [newPassword, setNewPassword] = useState({ website: '', username: '', password: '' });
  const { toast } = useToast()

  const addPassword = () => {
    if (newPassword.website && newPassword.username && newPassword.password) {
      setPasswords([...passwords, { id: Date.now(), ...newPassword }]);
      setNewPassword({ website: '', username: '', password: '' });
      toast({
        title: "Password Added",
        description: "Your new password has been stored successfully.",
      })
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard.`,
      })
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
      })
    });
  };

  return (
    <>
      <NavigationMenu /> {/* Add the NavigationMenu component here */}
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Spiff Dashboard</h1>
        <Card className="mb-6 md:mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Add New Password</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <Input
                placeholder="Website"
                value={newPassword.website}
                onChange={(e) => setNewPassword({ ...newPassword, website: e.target.value })}
              />
              <Input
                placeholder="Username"
                value={newPassword.username}
                onChange={(e) => setNewPassword({ ...newPassword, username: e.target.value })}
              />
              <Input
                type="password"
                placeholder="Password"
                value={newPassword.password}
                onChange={(e) => setNewPassword({ ...newPassword, password: e.target.value })}
              />
            </div>
            <Button className="mt-4 w-full md:w-auto" onClick={addPassword}>Add Password</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Stored Passwords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30%]">Website</TableHead>
                    <TableHead className="w-[30%]">Username</TableHead>
                    <TableHead className="w-[20%]">Password</TableHead>
                    <TableHead className="w-[20%]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {passwords.map((pw) => (
                    <TableRow key={pw.id}>
                      <TableCell className="font-medium">{pw.website}</TableCell>
                      <TableCell>{pw.username}</TableCell>
                      <TableCell>••••••••</TableCell>
                      <TableCell>
                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="w-full sm:w-auto">View</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Password Details</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="website" className="text-right">
                                    Website
                                  </Label>
                                  <Input id="website" value={pw.website} className="col-span-3" readOnly />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="username" className="text-right">
                                    Username
                                  </Label>
                                  <Input id="username" value={pw.username} className="col-span-3" readOnly />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="password" className="text-right">
                                    Password
                                  </Label>
                                  <Input id="password" value={pw.password} className="col-span-3" readOnly />
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => copyToClipboard(pw.username, 'Username')}>
                            <Copy className="h-4 w-4 mr-2" /> Username
                          </Button>
                          <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => copyToClipboard(pw.password, 'Password')}>
                            <Copy className="h-4 w-4 mr-2" /> Password
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <Toaster />
      </div>
    </>
  );
}